import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTerminologiesCommandInput = ListTerminologiesRequest;
export declare type ListTerminologiesCommandOutput = ListTerminologiesResponse & __MetadataBearer;
export declare class ListTerminologiesCommand extends $Command<ListTerminologiesCommandInput, ListTerminologiesCommandOutput, TranslateClientResolvedConfig> {
    readonly input: ListTerminologiesCommandInput;
    constructor(input: ListTerminologiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTerminologiesCommandInput, ListTerminologiesCommandOutput>;
    private serialize;
    private deserialize;
}
