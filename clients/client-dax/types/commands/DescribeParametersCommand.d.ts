import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeParametersRequest, DescribeParametersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeParametersCommandInput = DescribeParametersRequest;
export declare type DescribeParametersCommandOutput = DescribeParametersResponse & __MetadataBearer;
export declare class DescribeParametersCommand extends $Command<DescribeParametersCommandInput, DescribeParametersCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeParametersCommandInput;
    constructor(input: DescribeParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput>;
    private serialize;
    private deserialize;
}
