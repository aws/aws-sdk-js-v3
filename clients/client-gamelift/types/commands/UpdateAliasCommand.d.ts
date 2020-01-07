import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateAliasInput, UpdateAliasOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAliasCommandInput = UpdateAliasInput;
export declare type UpdateAliasCommandOutput = UpdateAliasOutput & __MetadataBearer;
export declare class UpdateAliasCommand extends $Command<UpdateAliasCommandInput, UpdateAliasCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UpdateAliasCommandInput;
    constructor(input: UpdateAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAliasCommandInput, UpdateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
