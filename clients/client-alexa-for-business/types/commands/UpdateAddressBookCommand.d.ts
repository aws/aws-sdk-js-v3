import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateAddressBookRequest, UpdateAddressBookResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAddressBookCommandInput = UpdateAddressBookRequest;
export declare type UpdateAddressBookCommandOutput = UpdateAddressBookResponse & __MetadataBearer;
export declare class UpdateAddressBookCommand extends $Command<UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateAddressBookCommandInput;
    constructor(input: UpdateAddressBookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput>;
    private serialize;
    private deserialize;
}
