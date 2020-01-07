import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteReplicationJobRequest, DeleteReplicationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReplicationJobCommandInput = DeleteReplicationJobRequest;
export declare type DeleteReplicationJobCommandOutput = DeleteReplicationJobResponse & __MetadataBearer;
export declare class DeleteReplicationJobCommand extends $Command<DeleteReplicationJobCommandInput, DeleteReplicationJobCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteReplicationJobCommandInput;
    constructor(input: DeleteReplicationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationJobCommandInput, DeleteReplicationJobCommandOutput>;
    private serialize;
    private deserialize;
}
