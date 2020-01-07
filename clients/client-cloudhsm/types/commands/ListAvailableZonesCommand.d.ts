import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ListAvailableZonesRequest, ListAvailableZonesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAvailableZonesCommandInput = ListAvailableZonesRequest;
export declare type ListAvailableZonesCommandOutput = ListAvailableZonesResponse & __MetadataBearer;
export declare class ListAvailableZonesCommand extends $Command<ListAvailableZonesCommandInput, ListAvailableZonesCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ListAvailableZonesCommandInput;
    constructor(input: ListAvailableZonesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAvailableZonesCommandInput, ListAvailableZonesCommandOutput>;
    private serialize;
    private deserialize;
}
