import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeServiceActionExecutionParametersInput, DescribeServiceActionExecutionParametersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServiceActionExecutionParametersCommandInput = DescribeServiceActionExecutionParametersInput;
export declare type DescribeServiceActionExecutionParametersCommandOutput = DescribeServiceActionExecutionParametersOutput & __MetadataBearer;
export declare class DescribeServiceActionExecutionParametersCommand extends $Command<DescribeServiceActionExecutionParametersCommandInput, DescribeServiceActionExecutionParametersCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeServiceActionExecutionParametersCommandInput;
    constructor(input: DescribeServiceActionExecutionParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceActionExecutionParametersCommandInput, DescribeServiceActionExecutionParametersCommandOutput>;
    private serialize;
    private deserialize;
}
