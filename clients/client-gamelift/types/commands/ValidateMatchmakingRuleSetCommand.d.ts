import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ValidateMatchmakingRuleSetInput, ValidateMatchmakingRuleSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ValidateMatchmakingRuleSetCommandInput = ValidateMatchmakingRuleSetInput;
export declare type ValidateMatchmakingRuleSetCommandOutput = ValidateMatchmakingRuleSetOutput & __MetadataBearer;
export declare class ValidateMatchmakingRuleSetCommand extends $Command<ValidateMatchmakingRuleSetCommandInput, ValidateMatchmakingRuleSetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: ValidateMatchmakingRuleSetCommandInput;
    constructor(input: ValidateMatchmakingRuleSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidateMatchmakingRuleSetCommandInput, ValidateMatchmakingRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
