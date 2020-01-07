import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingConfigurationsInput, DescribeMatchmakingConfigurationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMatchmakingConfigurationsCommandInput = DescribeMatchmakingConfigurationsInput;
export declare type DescribeMatchmakingConfigurationsCommandOutput = DescribeMatchmakingConfigurationsOutput & __MetadataBearer;
export declare class DescribeMatchmakingConfigurationsCommand extends $Command<DescribeMatchmakingConfigurationsCommandInput, DescribeMatchmakingConfigurationsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeMatchmakingConfigurationsCommandInput;
    constructor(input: DescribeMatchmakingConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMatchmakingConfigurationsCommandInput, DescribeMatchmakingConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
