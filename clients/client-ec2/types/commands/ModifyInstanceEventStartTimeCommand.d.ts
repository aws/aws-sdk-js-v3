import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceEventStartTimeRequest, ModifyInstanceEventStartTimeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceEventStartTimeCommandInput = ModifyInstanceEventStartTimeRequest;
export declare type ModifyInstanceEventStartTimeCommandOutput = ModifyInstanceEventStartTimeResult & __MetadataBearer;
export declare class ModifyInstanceEventStartTimeCommand extends $Command<ModifyInstanceEventStartTimeCommandInput, ModifyInstanceEventStartTimeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceEventStartTimeCommandInput;
    constructor(input: ModifyInstanceEventStartTimeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceEventStartTimeCommandInput, ModifyInstanceEventStartTimeCommandOutput>;
    private serialize;
    private deserialize;
}
