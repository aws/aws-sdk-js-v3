import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateAliasInput, CreateAliasOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAliasCommandInput = CreateAliasInput;
export declare type CreateAliasCommandOutput = CreateAliasOutput & __MetadataBearer;
export declare class CreateAliasCommand extends $Command<CreateAliasCommandInput, CreateAliasCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateAliasCommandInput;
    constructor(input: CreateAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAliasCommandInput, CreateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
