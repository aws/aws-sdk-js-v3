import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDiskRequest, DeleteDiskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDiskCommandInput = DeleteDiskRequest;
export declare type DeleteDiskCommandOutput = DeleteDiskResult & __MetadataBearer;
export declare class DeleteDiskCommand extends $Command<DeleteDiskCommandInput, DeleteDiskCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDiskCommandInput;
    constructor(input: DeleteDiskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDiskCommandInput, DeleteDiskCommandOutput>;
    private serialize;
    private deserialize;
}
