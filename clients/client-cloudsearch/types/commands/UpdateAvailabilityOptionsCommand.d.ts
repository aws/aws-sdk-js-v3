import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { UpdateAvailabilityOptionsRequest, UpdateAvailabilityOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAvailabilityOptionsCommandInput = UpdateAvailabilityOptionsRequest;
export declare type UpdateAvailabilityOptionsCommandOutput = UpdateAvailabilityOptionsResponse & __MetadataBearer;
export declare class UpdateAvailabilityOptionsCommand extends $Command<UpdateAvailabilityOptionsCommandInput, UpdateAvailabilityOptionsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: UpdateAvailabilityOptionsCommandInput;
    constructor(input: UpdateAvailabilityOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAvailabilityOptionsCommandInput, UpdateAvailabilityOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
