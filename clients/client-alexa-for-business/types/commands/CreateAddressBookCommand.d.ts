import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateAddressBookRequest, CreateAddressBookResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAddressBookCommandInput = CreateAddressBookRequest;
export declare type CreateAddressBookCommandOutput = CreateAddressBookResponse & __MetadataBearer;
export declare class CreateAddressBookCommand extends $Command<CreateAddressBookCommandInput, CreateAddressBookCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateAddressBookCommandInput;
    constructor(input: CreateAddressBookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAddressBookCommandInput, CreateAddressBookCommandOutput>;
    private serialize;
    private deserialize;
}
