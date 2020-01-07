import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateFleetInput, CreateFleetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFleetCommandInput = CreateFleetInput;
export declare type CreateFleetCommandOutput = CreateFleetOutput & __MetadataBearer;
export declare class CreateFleetCommand extends $Command<CreateFleetCommandInput, CreateFleetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateFleetCommandInput;
    constructor(input: CreateFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFleetCommandInput, CreateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
