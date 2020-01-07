import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListOfferingPromotionsRequest, ListOfferingPromotionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOfferingPromotionsCommandInput = ListOfferingPromotionsRequest;
export declare type ListOfferingPromotionsCommandOutput = ListOfferingPromotionsResult & __MetadataBearer;
export declare class ListOfferingPromotionsCommand extends $Command<ListOfferingPromotionsCommandInput, ListOfferingPromotionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListOfferingPromotionsCommandInput;
    constructor(input: ListOfferingPromotionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOfferingPromotionsCommandInput, ListOfferingPromotionsCommandOutput>;
    private serialize;
    private deserialize;
}
