import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingInput, DescribeMatchmakingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMatchmakingCommandInput = DescribeMatchmakingInput;
export declare type DescribeMatchmakingCommandOutput = DescribeMatchmakingOutput & __MetadataBearer;
export declare class DescribeMatchmakingCommand extends $Command<DescribeMatchmakingCommandInput, DescribeMatchmakingCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeMatchmakingCommandInput;
    constructor(input: DescribeMatchmakingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMatchmakingCommandInput, DescribeMatchmakingCommandOutput>;
    private serialize;
    private deserialize;
}
