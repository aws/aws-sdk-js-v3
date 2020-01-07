import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScriptInput, DescribeScriptOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScriptCommandInput = DescribeScriptInput;
export declare type DescribeScriptCommandOutput = DescribeScriptOutput & __MetadataBearer;
export declare class DescribeScriptCommand extends $Command<DescribeScriptCommandInput, DescribeScriptCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeScriptCommandInput;
    constructor(input: DescribeScriptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScriptCommandInput, DescribeScriptCommandOutput>;
    private serialize;
    private deserialize;
}
