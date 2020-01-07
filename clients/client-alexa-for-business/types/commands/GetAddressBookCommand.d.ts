import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetAddressBookRequest, GetAddressBookResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAddressBookCommandInput = GetAddressBookRequest;
export declare type GetAddressBookCommandOutput = GetAddressBookResponse & __MetadataBearer;
export declare class GetAddressBookCommand extends $Command<GetAddressBookCommandInput, GetAddressBookCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetAddressBookCommandInput;
    constructor(input: GetAddressBookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAddressBookCommandInput, GetAddressBookCommandOutput>;
    private serialize;
    private deserialize;
}
