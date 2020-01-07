import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeDefaultParametersRequest, DescribeDefaultParametersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDefaultParametersCommandInput = DescribeDefaultParametersRequest;
export declare type DescribeDefaultParametersCommandOutput = DescribeDefaultParametersResponse & __MetadataBearer;
export declare class DescribeDefaultParametersCommand extends $Command<DescribeDefaultParametersCommandInput, DescribeDefaultParametersCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeDefaultParametersCommandInput;
    constructor(input: DescribeDefaultParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDefaultParametersCommandInput, DescribeDefaultParametersCommandOutput>;
    private serialize;
    private deserialize;
}
