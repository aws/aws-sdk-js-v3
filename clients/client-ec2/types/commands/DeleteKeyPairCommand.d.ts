import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteKeyPairRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteKeyPairCommandInput = DeleteKeyPairRequest;
export declare type DeleteKeyPairCommandOutput = __MetadataBearer;
export declare class DeleteKeyPairCommand extends $Command<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteKeyPairCommandInput;
    constructor(input: DeleteKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
