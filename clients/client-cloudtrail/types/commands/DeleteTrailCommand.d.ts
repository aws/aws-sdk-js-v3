import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { DeleteTrailRequest, DeleteTrailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrailCommandInput = DeleteTrailRequest;
export declare type DeleteTrailCommandOutput = DeleteTrailResponse & __MetadataBearer;
export declare class DeleteTrailCommand extends $Command<DeleteTrailCommandInput, DeleteTrailCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: DeleteTrailCommandInput;
    constructor(input: DeleteTrailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrailCommandInput, DeleteTrailCommandOutput>;
    private serialize;
    private deserialize;
}
