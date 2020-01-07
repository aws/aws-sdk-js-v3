import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBParameterGroupDetails, DescribeDBParametersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBParametersCommandInput = DescribeDBParametersMessage;
export declare type DescribeDBParametersCommandOutput = DBParameterGroupDetails & __MetadataBearer;
export declare class DescribeDBParametersCommand extends $Command<DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBParametersCommandInput;
    constructor(input: DescribeDBParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput>;
    private serialize;
    private deserialize;
}
