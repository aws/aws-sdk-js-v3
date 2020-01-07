import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DeleteHsmRequest, DeleteHsmResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHsmCommandInput = DeleteHsmRequest;
export declare type DeleteHsmCommandOutput = DeleteHsmResponse & __MetadataBearer;
export declare class DeleteHsmCommand extends $Command<DeleteHsmCommandInput, DeleteHsmCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: DeleteHsmCommandInput;
    constructor(input: DeleteHsmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHsmCommandInput, DeleteHsmCommandOutput>;
    private serialize;
    private deserialize;
}
