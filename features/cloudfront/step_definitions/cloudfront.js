var { CloudFront } = require("../../../clients/client-cloudfront");

module.exports = function() {
  var createParams = {
    CallerReference: "",
    Aliases: {
      Quantity: 0
    },
    DefaultRootObject: "",
    Origins: {
      Items: [
        {
          Id: "origin",
          DomainName: "example.com",
          CustomOriginConfig: {
            HTTPPort: 80,
            HTTPSPort: 443,
            OriginProtocolPolicy: "match-viewer"
          }
        }
      ],
      Quantity: 1
    },
    DefaultCacheBehavior: {
      TargetOriginId: "origin",
      ForwardedValues: {
        QueryString: false,
        Cookies: {
          Forward: "all"
        }
      },
      TrustedSigners: {
        Items: [],
        Enabled: false,
        Quantity: 0
      },
      ViewerProtocolPolicy: "allow-all",
      MinTTL: 0
    },
    CacheBehaviors: {
      Items: [],
      Quantity: 0
    },
    Comment: "",
    Logging: {
      Enabled: false,
      Bucket: "invalidbucket.s3.amazonaws.com",
      Prefix: "prefix",
      IncludeCookies: false
    },
    PriceClass: "PriceClass_All",
    Enabled: false
  };

  this.Before({ tags: ["@cloudfront"] }, function(scenario, callback) {
    this.service = new CloudFront({});
    this.cfCreateParams = createParams;
    callback();
  });

  this.Given(
    /^I create a CloudFront distribution with name prefix "([^"]*)"$/,
    function(prefix, callback) {
      this.cfName = this.uniqueName(prefix);
      this.cfCreateParams.CallerReference = this.cfName;
      this.cfCreateParams.Origins.Items[0].Id =
        this.cfName === "" ? "origin" : "InvalidOrigin";
      this.request(
        null,
        "createDistribution",
        { DistributionConfig: this.cfCreateParams },
        callback,
        false
      );
    }
  );

  this.Given(/^I list CloudFront distributions$/, function(callback) {
    this.request(null, "listDistributions", {}, callback);
  });
};
