import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { UpdateReplicationJobRequest, UpdateReplicationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateReplicationJobCommandInput = UpdateReplicationJobRequest;
export declare type UpdateReplicationJobCommandOutput = UpdateReplicationJobResponse & __MetadataBearer;
export declare class UpdateReplicationJobCommand extends $Command<UpdateReplicationJobCommandInput, UpdateReplicationJobCommandOutput, SMSClientResolvedConfig> {
    readonly input: UpdateReplicationJobCommandInput;
    constructor(input: UpdateReplicationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReplicationJobCommandInput, UpdateReplicationJobCommandOutput>;
    private serialize;
    private deserialize;
}
