import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyIdentityIdFormatRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyIdentityIdFormatCommandInput = ModifyIdentityIdFormatRequest;
export declare type ModifyIdentityIdFormatCommandOutput = __MetadataBearer;
export declare class ModifyIdentityIdFormatCommand extends $Command<ModifyIdentityIdFormatCommandInput, ModifyIdentityIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyIdentityIdFormatCommandInput;
    constructor(input: ModifyIdentityIdFormatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyIdentityIdFormatCommandInput, ModifyIdentityIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
