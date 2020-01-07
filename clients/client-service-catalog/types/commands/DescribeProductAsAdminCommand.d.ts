import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProductAsAdminInput, DescribeProductAsAdminOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProductAsAdminCommandInput = DescribeProductAsAdminInput;
export declare type DescribeProductAsAdminCommandOutput = DescribeProductAsAdminOutput & __MetadataBearer;
export declare class DescribeProductAsAdminCommand extends $Command<DescribeProductAsAdminCommandInput, DescribeProductAsAdminCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProductAsAdminCommandInput;
    constructor(input: DescribeProductAsAdminCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProductAsAdminCommandInput, DescribeProductAsAdminCommandOutput>;
    private serialize;
    private deserialize;
}
