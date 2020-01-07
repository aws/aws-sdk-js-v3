import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListVerifiedEmailAddressesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVerifiedEmailAddressesCommandInput = {};
export declare type ListVerifiedEmailAddressesCommandOutput = ListVerifiedEmailAddressesResponse & __MetadataBearer;
export declare class ListVerifiedEmailAddressesCommand extends $Command<ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListVerifiedEmailAddressesCommandInput;
    constructor(input: ListVerifiedEmailAddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
