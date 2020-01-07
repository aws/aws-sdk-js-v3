import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisioningArtifactInput, DescribeProvisioningArtifactOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProvisioningArtifactCommandInput = DescribeProvisioningArtifactInput;
export declare type DescribeProvisioningArtifactCommandOutput = DescribeProvisioningArtifactOutput & __MetadataBearer;
export declare class DescribeProvisioningArtifactCommand extends $Command<DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProvisioningArtifactCommandInput;
    constructor(input: DescribeProvisioningArtifactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
