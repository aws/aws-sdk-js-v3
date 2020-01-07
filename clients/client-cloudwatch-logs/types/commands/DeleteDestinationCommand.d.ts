import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteDestinationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDestinationCommandInput = DeleteDestinationRequest;
export declare type DeleteDestinationCommandOutput = __MetadataBearer;
export declare class DeleteDestinationCommand extends $Command<DeleteDestinationCommandInput, DeleteDestinationCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteDestinationCommandInput;
    constructor(input: DeleteDestinationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDestinationCommandInput, DeleteDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
