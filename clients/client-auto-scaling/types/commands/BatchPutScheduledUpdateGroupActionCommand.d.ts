import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { BatchPutScheduledUpdateGroupActionAnswer, BatchPutScheduledUpdateGroupActionType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchPutScheduledUpdateGroupActionCommandInput = BatchPutScheduledUpdateGroupActionType;
export declare type BatchPutScheduledUpdateGroupActionCommandOutput = BatchPutScheduledUpdateGroupActionAnswer & __MetadataBearer;
export declare class BatchPutScheduledUpdateGroupActionCommand extends $Command<BatchPutScheduledUpdateGroupActionCommandInput, BatchPutScheduledUpdateGroupActionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: BatchPutScheduledUpdateGroupActionCommandInput;
    constructor(input: BatchPutScheduledUpdateGroupActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchPutScheduledUpdateGroupActionCommandInput, BatchPutScheduledUpdateGroupActionCommandOutput>;
    private serialize;
    private deserialize;
}
