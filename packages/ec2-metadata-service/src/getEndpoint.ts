interface Endpoint {
  IPv4: string;
  IPv6: string;
}

/*
 Refer: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
*/
export const getEndpoint = (): Endpoint => {
  return {
    IPv4: "http://169.254.169.254",
    IPv6: "http://[fd00:ec2::254]",
  };
};
