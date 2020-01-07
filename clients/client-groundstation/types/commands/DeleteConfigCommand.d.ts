import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, DeleteConfigRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigCommandInput = DeleteConfigRequest;
export declare type DeleteConfigCommandOutput = ConfigIdResponse & __MetadataBearer;
export declare class DeleteConfigCommand extends $Command<DeleteConfigCommandInput, DeleteConfigCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: DeleteConfigCommandInput;
    constructor(input: DeleteConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigCommandInput, DeleteConfigCommandOutput>;
    private serialize;
    private deserialize;
}
