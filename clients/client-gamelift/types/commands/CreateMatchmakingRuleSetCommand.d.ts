import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateMatchmakingRuleSetInput, CreateMatchmakingRuleSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMatchmakingRuleSetCommandInput = CreateMatchmakingRuleSetInput;
export declare type CreateMatchmakingRuleSetCommandOutput = CreateMatchmakingRuleSetOutput & __MetadataBearer;
export declare class CreateMatchmakingRuleSetCommand extends $Command<CreateMatchmakingRuleSetCommandInput, CreateMatchmakingRuleSetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateMatchmakingRuleSetCommandInput;
    constructor(input: CreateMatchmakingRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMatchmakingRuleSetCommandInput, CreateMatchmakingRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
