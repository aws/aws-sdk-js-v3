import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateScriptInput, UpdateScriptOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateScriptCommandInput = UpdateScriptInput;
export declare type UpdateScriptCommandOutput = UpdateScriptOutput & __MetadataBearer;
export declare class UpdateScriptCommand extends $Command<UpdateScriptCommandInput, UpdateScriptCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateScriptCommandInput;
    constructor(input: UpdateScriptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateScriptCommandInput, UpdateScriptCommandOutput>;
    private serialize;
    private deserialize;
}
