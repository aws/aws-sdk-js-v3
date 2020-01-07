import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DisassociateContactFromAddressBookRequest, DisassociateContactFromAddressBookResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateContactFromAddressBookCommandInput = DisassociateContactFromAddressBookRequest;
export declare type DisassociateContactFromAddressBookCommandOutput = DisassociateContactFromAddressBookResponse & __MetadataBearer;
export declare class DisassociateContactFromAddressBookCommand extends $Command<DisassociateContactFromAddressBookCommandInput, DisassociateContactFromAddressBookCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DisassociateContactFromAddressBookCommandInput;
    constructor(input: DisassociateContactFromAddressBookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateContactFromAddressBookCommandInput, DisassociateContactFromAddressBookCommandOutput>;
    private serialize;
    private deserialize;
}
