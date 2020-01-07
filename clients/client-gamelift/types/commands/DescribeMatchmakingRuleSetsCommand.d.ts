import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingRuleSetsInput, DescribeMatchmakingRuleSetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMatchmakingRuleSetsCommandInput = DescribeMatchmakingRuleSetsInput;
export declare type DescribeMatchmakingRuleSetsCommandOutput = DescribeMatchmakingRuleSetsOutput & __MetadataBearer;
export declare class DescribeMatchmakingRuleSetsCommand extends $Command<DescribeMatchmakingRuleSetsCommandInput, DescribeMatchmakingRuleSetsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeMatchmakingRuleSetsCommandInput;
    constructor(input: DescribeMatchmakingRuleSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMatchmakingRuleSetsCommandInput, DescribeMatchmakingRuleSetsCommandOutput>;
    private serialize;
    private deserialize;
}
