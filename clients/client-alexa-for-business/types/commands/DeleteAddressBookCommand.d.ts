import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteAddressBookRequest, DeleteAddressBookResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAddressBookCommandInput = DeleteAddressBookRequest;
export declare type DeleteAddressBookCommandOutput = DeleteAddressBookResponse & __MetadataBearer;
export declare class DeleteAddressBookCommand extends $Command<DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteAddressBookCommandInput;
    constructor(input: DeleteAddressBookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput>;
    private serialize;
    private deserialize;
}
