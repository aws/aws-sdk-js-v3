import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { CreateFaqRequest, CreateFaqResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFaqCommandInput = CreateFaqRequest;
export declare type CreateFaqCommandOutput = CreateFaqResponse & __MetadataBearer;
export declare class CreateFaqCommand extends $Command<CreateFaqCommandInput, CreateFaqCommandOutput, kendraClientResolvedConfig> {
    readonly input: CreateFaqCommandInput;
    constructor(input: CreateFaqCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFaqCommandInput, CreateFaqCommandOutput>;
    private serialize;
    private deserialize;
}
