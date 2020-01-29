import { CloudFrontClient } from "./CloudFrontClient";
import {
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  CreateDistributionCommand,
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput
} from "./commands/CreateDistributionCommand";
import {
  CreateDistributionWithTagsCommand,
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput
} from "./commands/CreateDistributionWithTagsCommand";
import {
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import {
  CreateFieldLevelEncryptionProfileCommand,
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import {
  CreateInvalidationCommand,
  CreateInvalidationCommandInput,
  CreateInvalidationCommandOutput
} from "./commands/CreateInvalidationCommand";
import {
  CreatePublicKeyCommand,
  CreatePublicKeyCommandInput,
  CreatePublicKeyCommandOutput
} from "./commands/CreatePublicKeyCommand";
import {
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput
} from "./commands/CreateStreamingDistributionCommand";
import {
  CreateStreamingDistributionWithTagsCommand,
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  DeleteDistributionCommand,
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput
} from "./commands/DeleteDistributionCommand";
import {
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import {
  DeletePublicKeyCommand,
  DeletePublicKeyCommandInput,
  DeletePublicKeyCommandOutput
} from "./commands/DeletePublicKeyCommand";
import {
  DeleteStreamingDistributionCommand,
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput
} from "./commands/DeleteStreamingDistributionCommand";
import {
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import {
  GetDistributionCommand,
  GetDistributionCommandInput,
  GetDistributionCommandOutput
} from "./commands/GetDistributionCommand";
import {
  GetDistributionConfigCommand,
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput
} from "./commands/GetDistributionConfigCommand";
import {
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput
} from "./commands/GetFieldLevelEncryptionCommand";
import {
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import {
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import {
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import {
  GetInvalidationCommand,
  GetInvalidationCommandInput,
  GetInvalidationCommandOutput
} from "./commands/GetInvalidationCommand";
import {
  GetPublicKeyCommand,
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput
} from "./commands/GetPublicKeyCommand";
import {
  GetPublicKeyConfigCommand,
  GetPublicKeyConfigCommandInput,
  GetPublicKeyConfigCommandOutput
} from "./commands/GetPublicKeyConfigCommand";
import {
  GetStreamingDistributionCommand,
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput
} from "./commands/GetStreamingDistributionCommand";
import {
  GetStreamingDistributionConfigCommand,
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput
} from "./commands/GetStreamingDistributionConfigCommand";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  ListDistributionsByWebACLIdCommand,
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput
} from "./commands/ListDistributionsByWebACLIdCommand";
import {
  ListDistributionsCommand,
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput
} from "./commands/ListDistributionsCommand";
import {
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import {
  ListFieldLevelEncryptionProfilesCommand,
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import {
  ListInvalidationsCommand,
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput
} from "./commands/ListInvalidationsCommand";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
} from "./commands/ListPublicKeysCommand";
import {
  ListStreamingDistributionsCommand,
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput
} from "./commands/ListStreamingDistributionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import {
  UpdateDistributionCommand,
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput
} from "./commands/UpdateDistributionCommand";
import {
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import {
  UpdatePublicKeyCommand,
  UpdatePublicKeyCommandInput,
  UpdatePublicKeyCommandOutput
} from "./commands/UpdatePublicKeyCommand";
import {
  UpdateStreamingDistributionCommand,
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput
} from "./commands/UpdateStreamingDistributionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CloudFront extends CloudFrontClient {
  /**
   * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
   * 			use an origin access identity to require users to access your content using a CloudFront URL instead
   * 			of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput>;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    cb: (
      err: any,
      data?: CreateCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateCloudFrontOriginAccessIdentityCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new CreateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you
   * 			want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the
   * 			<code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p>
   * 		       <important>
   *             <p>When you update a distribution, there are more required fields than when you create a distribution.
   * 			When you update your distribution by using
   * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>,
   * 			follow the steps included
   * 			in the documentation to get the current configuration
   * 			and then make your updates. This helps to make sure that you include all of the required fields. To view a summary,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
   * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          </important>
   */
  public createDistribution(
    args: CreateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionCommandOutput>;
  public createDistribution(
    args: CreateDistributionCommandInput,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  public createDistribution(
    args: CreateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  public createDistribution(
    args: CreateDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDistributionCommandOutput) => void),
    cb?: (err: any, data?: CreateDistributionCommandOutput) => void
  ): Promise<CreateDistributionCommandOutput> | void {
    const command = new CreateDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new distribution with tags.</p>
   */
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionWithTagsCommandOutput>;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDistributionWithTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): Promise<CreateDistributionWithTagsCommandOutput> | void {
    const command = new CreateDistributionWithTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new field-level encryption configuration.</p>
   */
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput>;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateFieldLevelEncryptionConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateFieldLevelEncryptionConfigCommandOutput
    ) => void
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new CreateFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a field-level encryption profile.</p>
   */
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput>;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    cb: (
      err: any,
      data?: CreateFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): void;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): void;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateFieldLevelEncryptionProfileCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new CreateFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new invalidation. </p>
   */
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvalidationCommandOutput>;
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInvalidationCommandOutput) => void),
    cb?: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): Promise<CreateInvalidationCommandOutput> | void {
    const command = new CreateInvalidationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.</p>
   */
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicKeyCommandOutput>;
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePublicKeyCommandOutput) => void),
    cb?: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): Promise<CreatePublicKeyCommandOutput> | void {
    const command = new CreatePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new RTMP distribution. An RTMP distribution is similar to a web distribution,
   * 			but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol
   * 			(RTMP) instead of serving files using HTTP. </p>
   * 		       <p>To create a new distribution, submit a <code>POST</code> request to the
   * 				<i>CloudFront API version</i>/distribution resource. The request body must include a
   * 			document with a <i>StreamingDistributionConfig</i> element. The response echoes
   * 			the <code>StreamingDistributionConfig</code> element and returns other information about the
   * 			RTMP distribution.</p>
   * 		       <p>To get the status of your request, use the <i>GET
   * 				StreamingDistribution</i> API action. When the value of <code>Enabled</code> is
   * 				<code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your
   * 			distribution is ready. A distribution usually deploys in less than 15 minutes.</p>
   * 		       <p>For more information about web distributions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <important>
   * 			         <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to
   * 				the format of the XML document that you include in the request body when you create or
   * 				update a web distribution or an RTMP distribution, and when you invalidate objects. With
   * 				previous versions of the API, we discovered that it was too easy to accidentally delete one
   * 				or more values for an element that accepts multiple values, for example, CNAMEs and trusted
   * 				signers. Our changes for the 2012-05-05 release are intended to prevent these accidental
   * 				deletions and to notify you when there's a mismatch between the number of values you say
   * 				you're specifying in the <code>Quantity</code> element and the number of values
   * 				specified.</p>
   * 		       </important>
   */
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionCommandOutput>;
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): Promise<CreateStreamingDistributionCommandOutput> | void {
    const command = new CreateStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a new streaming distribution with tags.</p>
   */
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput>;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    cb: (
      err: any,
      data?: CreateStreamingDistributionWithTagsCommandOutput
    ) => void
  ): void;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateStreamingDistributionWithTagsCommandOutput
    ) => void
  ): void;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateStreamingDistributionWithTagsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateStreamingDistributionWithTagsCommandOutput
    ) => void
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput> | void {
    const command = new CreateStreamingDistributionWithTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an origin access identity. </p>
   */
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput>;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    cb: (
      err: any,
      data?: DeleteCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteCloudFrontOriginAccessIdentityCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new DeleteCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a distribution. </p>
   */
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionCommandOutput>;
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDistributionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): Promise<DeleteDistributionCommandOutput> | void {
    const command = new DeleteDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove a field-level encryption configuration.</p>
   */
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput>;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteFieldLevelEncryptionConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteFieldLevelEncryptionConfigCommandOutput
    ) => void
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new DeleteFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove a field-level encryption profile.</p>
   */
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput>;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    cb: (
      err: any,
      data?: DeleteFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): void;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): void;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteFieldLevelEncryptionProfileCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new DeleteFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove a public key you previously added to CloudFront.</p>
   */
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicKeyCommandOutput>;
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePublicKeyCommandOutput) => void),
    cb?: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): Promise<DeletePublicKeyCommandOutput> | void {
    const command = new DeletePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
   * 			perform the following steps.</p>
   *
   * 		       <p>
   *             <b>To delete an RTMP distribution using the CloudFront
   * 			API</b>:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Disable the RTMP distribution.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current
   * 					configuration and the <code>Etag</code> header for the distribution. </p>
   * 			         </li>
   *             <li>
   * 				           <p>Update the XML document that was returned in the response to your <code>GET
   * 						Streaming Distribution Config</code> request to change the value of <code>Enabled</code>
   * 					to <code>false</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
   * 					configuration for your distribution. In the request body, include the XML document that
   * 					you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the
   * 					value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET
   * 						Streaming Distribution Config</code> request in Step 2.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Review the response to the <code>PUT Streaming Distribution Config</code> request
   * 					to confirm that the distribution was successfully disabled.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that
   * 					your changes have propagated. When propagation is complete, the value of
   * 						<code>Status</code> is <code>Deployed</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the
   * 					HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
   * 					returned when you submitted the <code>GET Streaming Distribution Config</code> request in
   * 					Step 2.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Review the response to your <code>DELETE Streaming Distribution</code> request to
   * 					confirm that the distribution was successfully deleted.</p>
   * 			         </li>
   *          </ol>
   * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingDistributionCommandOutput>;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): Promise<DeleteStreamingDistributionCommandOutput> | void {
    const command = new DeleteStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the information about an origin access identity. </p>
   */
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput>;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    cb: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetCloudFrontOriginAccessIdentityCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new GetCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the configuration information about an origin access identity. </p>
   */
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    cb: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput
    ) => void
  ): void;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput
    ) => void
  ): void;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput
    ) => void
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> | void {
    const command = new GetCloudFrontOriginAccessIdentityConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the information about a distribution.</p>
   */
  public getDistribution(
    args: GetDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionCommandOutput>;
  public getDistribution(
    args: GetDistributionCommandInput,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;
  public getDistribution(
    args: GetDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;
  public getDistribution(
    args: GetDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDistributionCommandOutput) => void),
    cb?: (err: any, data?: GetDistributionCommandOutput) => void
  ): Promise<GetDistributionCommandOutput> | void {
    const command = new GetDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the configuration information about a distribution. </p>
   */
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionConfigCommandOutput>;
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDistributionConfigCommandOutput) => void),
    cb?: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): Promise<GetDistributionConfigCommandOutput> | void {
    const command = new GetDistributionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the field-level encryption configuration information.</p>
   */
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionCommandOutput>;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetFieldLevelEncryptionCommandOutput) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionCommandOutput> | void {
    const command = new GetFieldLevelEncryptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the field-level encryption configuration information.</p>
   */
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput>;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new GetFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the field-level encryption profile information.</p>
   */
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput>;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetFieldLevelEncryptionProfileCommandOutput
        ) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new GetFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the field-level encryption profile configuration information.</p>
   */
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput>;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    cb: (
      err: any,
      data?: GetFieldLevelEncryptionProfileConfigCommandOutput
    ) => void
  ): void;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetFieldLevelEncryptionProfileConfigCommandOutput
    ) => void
  ): void;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetFieldLevelEncryptionProfileConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetFieldLevelEncryptionProfileConfigCommandOutput
    ) => void
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> | void {
    const command = new GetFieldLevelEncryptionProfileConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the information about an invalidation. </p>
   */
  public getInvalidation(
    args: GetInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvalidationCommandOutput>;
  public getInvalidation(
    args: GetInvalidationCommandInput,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;
  public getInvalidation(
    args: GetInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;
  public getInvalidation(
    args: GetInvalidationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInvalidationCommandOutput) => void),
    cb?: (err: any, data?: GetInvalidationCommandOutput) => void
  ): Promise<GetInvalidationCommandOutput> | void {
    const command = new GetInvalidationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the public key information.</p>
   */
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyCommandOutput>;
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): Promise<GetPublicKeyCommandOutput> | void {
    const command = new GetPublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Return public key configuration informaation</p>
   */
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyConfigCommandOutput>;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPublicKeyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): Promise<GetPublicKeyConfigCommandOutput> | void {
    const command = new GetPublicKeyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a specified RTMP distribution, including the distribution configuration.</p>
   */
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionCommandOutput>;
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): Promise<GetStreamingDistributionCommandOutput> | void {
    const command = new GetStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the configuration information about a streaming distribution. </p>
   */
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionConfigCommandOutput>;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetStreamingDistributionConfigCommandOutput
        ) => void),
    cb?: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): Promise<GetStreamingDistributionConfigCommandOutput> | void {
    const command = new GetStreamingDistributionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists origin access identities.</p>
   */
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    cb: (
      err: any,
      data?: ListCloudFrontOriginAccessIdentitiesCommandOutput
    ) => void
  ): void;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListCloudFrontOriginAccessIdentitiesCommandOutput
    ) => void
  ): void;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListCloudFrontOriginAccessIdentitiesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListCloudFrontOriginAccessIdentitiesCommandOutput
    ) => void
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> | void {
    const command = new ListCloudFrontOriginAccessIdentitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List CloudFront distributions.</p>
   */
  public listDistributions(
    args: ListDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsCommandOutput>;
  public listDistributions(
    args: ListDistributionsCommandInput,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  public listDistributions(
    args: ListDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  public listDistributions(
    args: ListDistributionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDistributionsCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsCommandOutput) => void
  ): Promise<ListDistributionsCommandOutput> | void {
    const command = new ListDistributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the distributions that are associated with a specified AWS WAF web ACL. </p>
   */
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByWebACLIdCommandOutput>;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): Promise<ListDistributionsByWebACLIdCommandOutput> | void {
    const command = new ListDistributionsByWebACLIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
   */
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListFieldLevelEncryptionConfigsCommandOutput
        ) => void),
    cb?: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput> | void {
    const command = new ListFieldLevelEncryptionConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</p>
   */
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListFieldLevelEncryptionProfilesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListFieldLevelEncryptionProfilesCommandOutput
    ) => void
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput> | void {
    const command = new ListFieldLevelEncryptionProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists invalidation batches. </p>
   */
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvalidationsCommandOutput>;
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListInvalidationsCommandOutput) => void),
    cb?: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): Promise<ListInvalidationsCommandOutput> | void {
    const command = new ListInvalidationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all public keys that have been added to CloudFront for this account.</p>
   */
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPublicKeysCommandOutput) => void),
    cb?: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): Promise<ListPublicKeysCommandOutput> | void {
    const command = new ListPublicKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List streaming distributions. </p>
   */
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingDistributionsCommandOutput>;
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStreamingDistributionsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): Promise<ListStreamingDistributionsCommandOutput> | void {
    const command = new ListStreamingDistributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List tags for a CloudFront resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Add tags to a CloudFront resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove tags from a CloudFront resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update an origin access identity. </p>
   */
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput>;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    cb: (
      err: any,
      data?: UpdateCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): void;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateCloudFrontOriginAccessIdentityCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateCloudFrontOriginAccessIdentityCommandOutput
    ) => void
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new UpdateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the configuration for a web distribution. </p>
   * 		       <important>
   *             <p>When you update a distribution, there are more required fields than when you create a distribution.
   * 			When you update your distribution by using this API action, follow the steps here to get the current configuration
   * 			and then make your updates, to make sure that you include all of the required fields. To view a summary,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
   * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          </important>
   * 		       <p>The update process includes getting the current distribution configuration, updating the XML document that is
   * 			returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p>
   * 		       <p>For information about updating a distribution using the CloudFront console instead, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a
   * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * 		       <p>
   *             <b>To update a web distribution using the CloudFront API</b>
   *          </p>
   * 		       <ol>
   *             <li>
   *                <p>Submit a
   * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html">GetDistributionConfig</a>
   * 				request to get the current configuration and an <code>Etag</code> header
   * 				for the distribution.</p>
   * 				           <note>
   *                   <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p>
   *                </note>
   * 			         </li>
   *             <li>
   *                <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include
   * 				your changes. </p>
   * 				           <important>
   * 					             <p>When you edit the XML file, be aware of the following:</p>
   * 					             <ul>
   *                      <li>
   *                         <p>You must strip out the ETag parameter that is returned.</p>
   *                      </li>
   *                      <li>
   *                         <p>Additional fields are required when you update a distribution. There may be fields included in the
   * 							XML file for features that you haven't configured for your distribution. This is expected and required to
   * 							successfully update the distribution.</p>
   *                      </li>
   *                      <li>
   *                         <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an
   * 							<code>IllegalUpdate</code> error. </p>
   *                      </li>
   *                      <li>
   *                         <p>The new configuration replaces the existing configuration; the values that you specify in an
   * 							<code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or
   * 							replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the
   * 							values that you want to appear in the updated distribution. In addition,
   * 							you must update the corresponding <code>Quantity</code> element.</p>
   *                      </li>
   *                   </ul>
   *                </important>
   * 			         </li>
   *             <li>
   *                <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>In the request body, include the XML document that you updated in Step 2. The request body must include an
   * 						XML document with a <code>DistributionConfig</code> element.</p>
   *                   </li>
   *                   <li>
   *                      <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned
   * 						when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *             <li>
   *                <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was
   * 				successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>Optional: Submit a
   * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a>
   * 				request to confirm that your changes have propagated.
   * 				When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p>
   * 			         </li>
   *          </ol>
   */
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionCommandOutput>;
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDistributionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): Promise<UpdateDistributionCommandOutput> | void {
    const command = new UpdateDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a field-level encryption configuration. </p>
   */
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput>;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateFieldLevelEncryptionConfigCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateFieldLevelEncryptionConfigCommandOutput
    ) => void
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new UpdateFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a field-level encryption profile. </p>
   */
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput>;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    cb: (
      err: any,
      data?: UpdateFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): void;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): void;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateFieldLevelEncryptionProfileCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateFieldLevelEncryptionProfileCommandOutput
    ) => void
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new UpdateFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update public key information. Note that the only value you can change is the comment.</p>
   */
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicKeyCommandOutput>;
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdatePublicKeyCommandOutput) => void),
    cb?: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): Promise<UpdatePublicKeyCommandOutput> | void {
    const command = new UpdatePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a streaming distribution. </p>
   */
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamingDistributionCommandOutput>;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): Promise<UpdateStreamingDistributionCommandOutput> | void {
    const command = new UpdateStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
