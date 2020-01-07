import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeConstraintInput, DescribeConstraintOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConstraintCommandInput = DescribeConstraintInput;
export declare type DescribeConstraintCommandOutput = DescribeConstraintOutput & __MetadataBearer;
export declare class DescribeConstraintCommand extends $Command<DescribeConstraintCommandInput, DescribeConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeConstraintCommandInput;
    constructor(input: DescribeConstraintCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConstraintCommandInput, DescribeConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
