import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateContactWithAddressBookRequest, AssociateContactWithAddressBookResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateContactWithAddressBookCommandInput = AssociateContactWithAddressBookRequest;
export declare type AssociateContactWithAddressBookCommandOutput = AssociateContactWithAddressBookResponse & __MetadataBearer;
export declare class AssociateContactWithAddressBookCommand extends $Command<AssociateContactWithAddressBookCommandInput, AssociateContactWithAddressBookCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: AssociateContactWithAddressBookCommandInput;
    constructor(input: AssociateContactWithAddressBookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateContactWithAddressBookCommandInput, AssociateContactWithAddressBookCommandOutput>;
    private serialize;
    private deserialize;
}
