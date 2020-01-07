import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisioningParametersInput, DescribeProvisioningParametersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProvisioningParametersCommandInput = DescribeProvisioningParametersInput;
export declare type DescribeProvisioningParametersCommandOutput = DescribeProvisioningParametersOutput & __MetadataBearer;
export declare class DescribeProvisioningParametersCommand extends $Command<DescribeProvisioningParametersCommandInput, DescribeProvisioningParametersCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProvisioningParametersCommandInput;
    constructor(input: DescribeProvisioningParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisioningParametersCommandInput, DescribeProvisioningParametersCommandOutput>;
    private serialize;
    private deserialize;
}
