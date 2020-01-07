import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyIdFormatRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyIdFormatCommandInput = ModifyIdFormatRequest;
export declare type ModifyIdFormatCommandOutput = __MetadataBearer;
export declare class ModifyIdFormatCommand extends $Command<ModifyIdFormatCommandInput, ModifyIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyIdFormatCommandInput;
    constructor(input: ModifyIdFormatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyIdFormatCommandInput, ModifyIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
