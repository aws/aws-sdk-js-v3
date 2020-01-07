import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionsInput, DescribeGameSessionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGameSessionsCommandInput = DescribeGameSessionsInput;
export declare type DescribeGameSessionsCommandOutput = DescribeGameSessionsOutput & __MetadataBearer;
export declare class DescribeGameSessionsCommand extends $Command<DescribeGameSessionsCommandInput, DescribeGameSessionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameSessionsCommandInput;
    constructor(input: DescribeGameSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameSessionsCommandInput, DescribeGameSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
