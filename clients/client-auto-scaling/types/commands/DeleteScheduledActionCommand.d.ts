import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeleteScheduledActionType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScheduledActionCommandInput = DeleteScheduledActionType;
export declare type DeleteScheduledActionCommandOutput = __MetadataBearer;
export declare class DeleteScheduledActionCommand extends $Command<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeleteScheduledActionCommandInput;
    constructor(input: DeleteScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
