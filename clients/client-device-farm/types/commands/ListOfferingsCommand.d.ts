import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListOfferingsRequest, ListOfferingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOfferingsCommandInput = ListOfferingsRequest;
export declare type ListOfferingsCommandOutput = ListOfferingsResult & __MetadataBearer;
export declare class ListOfferingsCommand extends $Command<ListOfferingsCommandInput, ListOfferingsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListOfferingsCommandInput;
    constructor(input: ListOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOfferingsCommandInput, ListOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
