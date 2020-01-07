import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PutScheduledUpdateGroupActionType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutScheduledUpdateGroupActionCommandInput = PutScheduledUpdateGroupActionType;
export declare type PutScheduledUpdateGroupActionCommandOutput = __MetadataBearer;
export declare class PutScheduledUpdateGroupActionCommand extends $Command<PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: PutScheduledUpdateGroupActionCommandInput;
    constructor(input: PutScheduledUpdateGroupActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput>;
    private serialize;
    private deserialize;
}
