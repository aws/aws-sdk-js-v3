import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateContactRequest, CreateContactResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateContactCommandInput = CreateContactRequest;
export declare type CreateContactCommandOutput = CreateContactResponse & __MetadataBearer;
export declare class CreateContactCommand extends $Command<CreateContactCommandInput, CreateContactCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateContactCommandInput;
    constructor(input: CreateContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactCommandInput, CreateContactCommandOutput>;
    private serialize;
    private deserialize;
}
