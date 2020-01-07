import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { UpdateTrailRequest, UpdateTrailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTrailCommandInput = UpdateTrailRequest;
export declare type UpdateTrailCommandOutput = UpdateTrailResponse & __MetadataBearer;
export declare class UpdateTrailCommand extends $Command<UpdateTrailCommandInput, UpdateTrailCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: UpdateTrailCommandInput;
    constructor(input: UpdateTrailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrailCommandInput, UpdateTrailCommandOutput>;
    private serialize;
    private deserialize;
}
