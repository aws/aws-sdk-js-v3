import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeStackProvisioningParametersRequest, DescribeStackProvisioningParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackProvisioningParametersCommandInput = DescribeStackProvisioningParametersRequest;
export declare type DescribeStackProvisioningParametersCommandOutput = DescribeStackProvisioningParametersResult & __MetadataBearer;
export declare class DescribeStackProvisioningParametersCommand extends $Command<DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeStackProvisioningParametersCommandInput;
    constructor(input: DescribeStackProvisioningParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput>;
    private serialize;
    private deserialize;
}
