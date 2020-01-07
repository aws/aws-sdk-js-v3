import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CancelContactRequest, ContactIdResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelContactCommandInput = CancelContactRequest;
export declare type CancelContactCommandOutput = ContactIdResponse & __MetadataBearer;
export declare class CancelContactCommand extends $Command<CancelContactCommandInput, CancelContactCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: CancelContactCommandInput;
    constructor(input: CancelContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelContactCommandInput, CancelContactCommandOutput>;
    private serialize;
    private deserialize;
}
